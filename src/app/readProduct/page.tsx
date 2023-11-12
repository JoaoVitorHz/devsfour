export default function ReadProduct(){
    return(
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='bg-white w-1/2 p-5'>

                <div className='flex justify-between mb-8'>
                    <span className='text-black text-xl'>Ver Produtos</span>
                </div>

                <div>
                    <table className="table-fixed w-full">
                        <thead className="mb-8">
                            <tr>
                                <th className="text-gray-500 text-sm">ID</th>
                                <th className="text-gray-500 text-sm">Nome</th>
                                <th className="text-gray-500 text-sm">Descrição</th>
                                <th className="text-gray-500 text-sm">Tipo</th>
                                <th className="text-gray-500 text-sm">Preço</th>
                                <th className="text-gray-500 text-sm">Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td>1</td>
                                <td>Mouse</td>
                                <td>Mouse Gamer Logitech</td>
                                <td>Tecnologia</td>
                                <td>R$ 750,00</td>
                                <td>12</td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    )
}