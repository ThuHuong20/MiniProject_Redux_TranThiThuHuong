import Table from 'react-bootstrap/Table';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../redux/product/action';

const listProductsLocal = JSON.parse(localStorage.getItem("listProductsLocal")) || []
function StripedRowExample() {

    const dispatch = useDispatch();

    const handleDelete = (productId) => {
        dispatch(deleteProduct(productId))
    }
    const calculateTotalQuantity = () => {
        let totalQuantity = 0;

        listProductsLocal.forEach(item => {
            totalQuantity += item.quantity;
        });

        return totalQuantity;
    };
    const calculateTotalAmount = () => {
        let totalAmount = 0;
        listProductsLocal.forEach(item => {
            const { price, quantity } = item;
            const productTotal = price * quantity;
            totalAmount += productTotal;
        });
        return totalAmount;
    }
    // function Cart() {
    //     const mergeItemById = () => {
    //         const mergeItems = [];
    //         listProductsLocal.forEach(item => {
    //             const existingItem = mergeItems.find(mergeItem => mergeItem.productId === item.productId);
    //             if (existingItem) {
    //                 existingItem.quantity += item.quantity;
    //             } else {
    //                 mergeItems.push({ ...item });
    //             }
    //         });
    //         return mergeItems;
    //     }

    // };
    // const mergedCartItems = mergeItemById();

    return (
        <div>
            <div className='table_content'>
                <Table striped>
                    <thead>
                        <tr style={{ backgroundColor: "hsl(0, 44%, 91%)" }}>
                            <th colSpan={6}>
                                <h5 style={{ color: "red" }}>Your Cart</h5>
                            </th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {listProductsLocal.map((product) => (
                            <tr key={product.productId}>
                                <td>{product.productId}</td>
                                <td>{product.productName}</td>
                                <td>${product.price}</td>
                                <td><input className='productQuantityCart' type='number' name='id' defaultValue={product.quantity} ></input></td>
                                <td>${product.price * product.quantity}</td>
                                <td style={{ display: "flex" }}>
                                    <button className='updateEdit'>Update</button>
                                    <button className='delete' onClick={() => handleDelete(product.productId)} >Delete</button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td
                                colSpan={6}>There are <span style={{ fontWeight: "bold" }}>{calculateTotalQuantity()}</span> items in your shopping cart:
                                <span style={{ color: "red", fontSize: "20px", marginLeft: "160px" }}>Total: ${calculateTotalAmount()}</span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='text_update'>
                <div className='text'>Updated ivysaur</div>
            </div>
        </div>
    );
}

export default StripedRowExample;