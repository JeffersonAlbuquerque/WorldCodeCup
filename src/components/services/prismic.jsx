import * as prismic from '@prismicio/client'

// Criar o client corretamente
export const client = prismic.createClient('worldcodecup', {
    accessToken: 'MC5hamY4ZkJFQUFDZ0FSN3Bf.77-977-9Bu-_vQsS77-9HO-_ve-_vSbvv70WASDvv73vv718de-_vVfvv73vv73vv71WDO-_vWsl77-9Le-_vQ',
})

// Exportar como função (caso queira usar futuramente algo dinâmico)
export default function getPrismicClient() {
    return client
}
