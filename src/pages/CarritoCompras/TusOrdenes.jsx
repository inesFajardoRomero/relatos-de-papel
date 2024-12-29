import {Table} from "../../components/Table.jsx";

export function TusOrdenes() {
    const columns = [
        {
            header: '',
            render: (row) => (
                <a href="">
                    <img width="50%" src={row.image} alt="" className="icon-shape icon-xl" />
                </a>
            ),
        },
        {
            header: 'Producto',
            render: (row) => (
                <>
                    <a className="fw-semibold text-inherit" href="">
                        <h6 className="mb-0">{row.productName}</h6>
                    </a>
                    <span>
                        <small className="text-muted">{row.weight}</small>
                    </span>
                </>
            ),
        },
        { header: 'N° Orden', field: 'orderNumber' },
        { header: 'Fecha', field: 'date' },
        { header: 'Items', field: 'items' },
        {
            header: 'Estado',
            render: (row) => (
                <span className={`custom-badge badge bg-${row.status.color}`}>
          {row.status.text}
        </span>
            ),
        },
        { header: 'Precio', field: 'price' },
        {
            header: 'Acciones',
            render: (row) => (
                <div className="action-button">
                    <a className="text-inherit" href="">
                        <img className="icon-shape  icon" src="/img/icon/eye.svg" alt="View"/>
                    </a>
                </div>

            ),
        },
    ];

    const data = [
        {
            image: 'https://images.cdn3.buscalibre.com/fit-in/360x360/aa/cc/aacc1e2d359a74f3efb144b8ab8f790f.jpg',
            productName: 'Haldirams Nagpur Aloo Bhujia',
            weight: '400g',
            orderNumber: '#14899',
            date: 'March 5, 2023',
            items: 1,
            status: { text: 'Processing', color: 'warning' },
            price: '$15.00',
        },
        {
            image: 'https://images.cdn3.buscalibre.com/fit-in/360x360/aa/cc/aacc1e2d359a74f3efb144b8ab8f790f.jpg',
            productName: 'Pepsi Soft Drink',
            weight: '1L',
            orderNumber: '#14900',
            date: 'March 6, 2023',
            items: 2,
            status: { text: 'Shipped', color: 'success' },
            price: '$10.00',
        },
    ];

    return (
       <div className="py-6 p-md-6 p-lg-10"><h2 className="mb-6">Tu Orden</h2>
            <div className="table-responsive-xxl border-0">
                <Table columns={columns} data={data} />
            </div>
        </div>
    );
}