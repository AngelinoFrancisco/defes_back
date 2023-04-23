import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Atividade from 'App/Models/Atividade'
import Relatorio from 'App/Models/Relatorio'

export default class RelatoriosController {

    public async duty({ params, response, auth }: HttpContextContract) {
        const tipo = params.tipo
        const search = params.search

        const isAuthenticated = await auth.use('api').check()

        if (isAuthenticated) {
            if (tipo == "nome") {

                const duty = await Relatorio.findBy(`${tipo}`, `${search}`)
                if (!duty) {
                    return response.status(200).send(false)
                }
                console.log("apenas 1")
                return response.status(200).send(duty)

            }
            const ativity = await Atividade.findBy(tipo, search)
            if (!ativity) {
                return response.status(200).send(false)
            }

            const Duties = await Relatorio.query().where("atividade_id", ativity!.id)
            if (!Duties) {
                return response.status(200).send(false)
            }
            return response.status(200).send(Duties)


        } else {
            return response.status(404).send(false)
        }
    }
    public async getMine({ params, response, auth }: HttpContextContract) {
        const user_id = params.user_id
        const isAuthenticated = await auth.use('api').check()

        if (isAuthenticated) {
            const Duties = await Relatorio.query().where("user_id", user_id)
            if (!Duties || Duties == undefined || Duties == null) {
                return response.status(200).send(false)
            }
            return response.status(200).send(Duties)

        }

        return response.status(404).send(false)

    }


    public async getAll({ auth, response, request }: HttpContextContract) {

        const isAuthenticated = await auth.use('api').check()

        if (isAuthenticated) {
            const Duties = await Relatorio.all()
            if (!Duties || Duties == undefined || Duties == null) {
                return response.status(200).send(false)
            }
            return response.status(200).send(Duties)

        }

        return response.status(404).send(false)




    }

    public async create({ request, response }: HttpContextContract) {
        const test = request.input('test')

        const getAtivity = await Atividade.findBy('acronimo', test)

        if (getAtivity) {
            const newDuty = {
                nome: request.input('nome'),
                user_id: request.input('user_id'),
                uuid: request.input('uuid'),
                atividade_id: getAtivity.id

            }

            await Relatorio.create(newDuty).then((result) => {

                response.status(200).send(result)

            }).catch((errors) => {
                response.status(404).send(errors)

            })
        }
    }

    public async deleteOne({ response, params, auth }: HttpContextContract) {

        const uuid = params.uuid

        const isAuthenticated = await auth.use('api').check()

        if (isAuthenticated) {
            const Duty = await Relatorio.findBy('uuid', uuid)
            if (!Duty || Duty === undefined || Duty === null) {
                return response.status(200).send(false)
            }
            Duty.delete()
            return response.status(200).send(true)
        } else {
            return response.status(404).send(false)
        }


    }

    public async bypass({ params, response, request, auth }: HttpContextContract) {
        const { test, target } = request.all()


        console.log( "test", test)
        console.log( "target", test)
        
        const isAuthenticated = await auth.use('api').check()

        if (isAuthenticated) {
            if (target === "itel.gov.ao") {


                if (test === "vulnerabities") {

                    return response.status(200).send({
                        vulnerability: "exposed-vscode",
                        level: "medio",
                        manner: "https://itel.gov.ao/.vscode/"
                    });
                }
                if (test === "subdomains") {
                    const subDomains = [
                        "www.itel.gov.ao",
                        "mail.itel.gov.ao",
                        "www.sge.itel.gov.ao",
                        "webemail.itel.gov.ao",
                        "sge.itel.gov.ao",
                        "www.webemail.itel.gov.ao",
                        "www.associal.itel.gov.ao",
                        "associal.itel.gov.ao"]

                    return response.status(200).send({ subdomains: subDomains });
                }
                if (test === "portscan") {
                    const portScan = [
                        "itel.gov.ao: 3306",
                        "itel.gov.ao:443"]

                    return response.status(200).send({ portscan: portScan });
                }
                if (test === "technologies") {

                    return response.status(200).send({ tech: "apachegeneric" });
                }

            }

            if (target === "wan.ao") {

                if (test === "vulnerabities") {

                    const vulneral = [{ "vulnerability": "laravel-debug-enabled", "level": "médio", "manner": "http://uan.ao/_ignition/health-check" },
                    { "vulnerability": "weak-cipher-suites", "level": "médio", "manner": "[ssl] uan.ao:443 [[tls10  TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA]]" },
                    { "vulnerability": "weak-cipher-suites", "level": "médio", "manner": "[ssl] uan.ao:443 [[tls11  TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA]]"  },
                  ]

                return response.status(200).send({vulnerability:vulneral});
 
                }
                if (test === "subdomains") {
                    const subDomains = [
                        "www.uan.ao",
                        "uan.ao",
                        "imap.uan.ao",
                        "smt.uan.ao",
                        "cc17.uan.ao",
                        "conferencias.uan.ao",
                        "mail.uan.ao",
                        "ns01.uan.ao",
                        "webemail.uan.ao",
                        "acesso.uan.ao",
                        "infosistem.uan.ao",
                        "moddle.uan.ao"
                    ]

                    return response.status(200).send({ subdomains: subDomains });
                }
                if (test === "portscan") { 

                    return response.status(200).send({ portscan: "uan.ao:8443" });
                }
                if (test === "technologies") {
                    const technolog = [
                        "font-awesome",
                        "animate.css",
                        "bootstrap",
                        "laravel",
                        "clodeflare",
                        "owl-carousel",
                    ]
                    return response.status(200).send({ tech: technolog });
                }

            }

          
        }

        return response.status(404).send(false)

    }
}
