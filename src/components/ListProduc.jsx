import React, { useEffect, useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/product/action';
const listProduct = [
    {
        productId: "P001",
        productName: "Salad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 12,
        quantity: 10,
    },
    {
        productId: "P002",
        productName: "Hamburger",
        image: "https://media.istockphoto.com/id/1416033452/vi/anh/cheeseburger-tr%C3%AAn-th%E1%BB%9Bt-g%E1%BB%97-t%E1%BB%B1-ch%E1%BA%BF-v%E1%BB%9Bi-n%E1%BB%81n-t%E1%BB%91i.jpg?s=1024x1024&w=is&k=20&c=7iAvQnpRjs3OY7ER6hy6MGunZw54fy3NWajw2N6e1yY=",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 16,
        quantity: 0,
    },
    {
        productId: "P003",
        productName: "Pizza",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 13,
        quantity: 8,
    },
    {
        productId: "P004",
        productName: "Cake",
        image: "https://images.unsplash.com/photo-1508736375612-66c03035c629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 14,
        quantity: 6,
    },

]
export default function ListProduc() {

    const defaultValue = 1
    const [products, setProduct] = useState(listProduct)
    const dispatch = useDispatch();

    const listProductsLocal = JSON.parse(localStorage.getItem("listProductsLocal")) || [];
    const handleAddProduct = (product) => {
        dispatch(addProduct(product))
        listProductsLocal.push(product);
        localStorage.setItem("listProductsLocal", JSON.stringify(listProductsLocal))
    }
    return (
        <div>
            {products.map((product) => (
                <MDBCard style={{ maxWidth: '100%' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ width: "400px", height: "200px", marginTop: "30px" }} src={product.image} alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='6'>
                            <MDBCardBody >
                                <MDBCardTitle>
                                    {product.productName}
                                    <input className='productQuantity' type='number' name='id' defaultValue={defaultValue}  ></input>
                                </MDBCardTitle>
                                <MDBCardText>
                                    {product.title}
                                </MDBCardText>
                                <MDBCardText>
                                    <small className='text-muted'>Last updated 3 mins ago</small>
                                    <button onClick={() => handleAddProduct(product)} type='submit' className='productPrice'>${product.price}</button>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>

            ))}
        </div>
    )
}
