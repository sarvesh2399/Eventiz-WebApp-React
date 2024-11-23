import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Added axios import
import { Link } from 'react-router-dom';
import { ServerUrl } from '../reusables/ServerUrl';

function ViewAll() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const [totalPages, setTotalPages] = useState(1); // Total pages
    const [error, setError] = useState(null);
    const itemsPerPage = 10; // Items per page

    // Fetch products with pagination
    // Updated Start
    const fetchProducts = async (page) => {
        try {
            const response = await axios.get(
                `${ServerUrl}/products?page=${page}&limit=${itemsPerPage}`
            );
            setProducts(response.data.products); // Extract products from API response
            setTotalPages(Math.ceil(response.data.totalCount / itemsPerPage));
        } catch (err) {
            console.error('Error loading JSON:', err);
            setError('Failed to load products. Please try again later.');
        }
    };
    // Updated End

    useEffect(() => {
        fetchProducts(currentPage); // Fetch products when the current page changes
    }, [currentPage]);

    // Function to handle page change
    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Handle delete functionality
    // Updated Start
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${ServerUrl}/products/${id}`);
            setProducts(products.filter((product) => product.id !== id)); // Update UI
        } catch (err) {
            console.error('Error deleting product:', err);
        }
    };
    // Updated End

    return (
        <div className="container">
            <Link
                to="/create"
                className="btn text-white mt-3"
                style={{ backgroundColor: '#F8669E' }}
            >
                Add New Product
            </Link>

            {/* Show error message if there's an issue */}
            {error && <p className="text-danger mt-3">{error}</p>}

            {/* Show table if products exist */}
            {products.length > 0 ? (
                <div>
                    <table className="table mt-3">
                        <thead>
                            <tr className="all-products">
                                <th>Product No</th>
                                <th>Product Name</th>
                                <th>Product Image</th>
                                <th>Product ID</th>
                                <th>Product Price ($)</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="productTableBody">
                            {products.map((product, index) => (
                                <tr key={product.id}>
                                    <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                    <td>{product.product_name}</td>
                                    <td>
                                        <img
                                            src={product.product_image}
                                            alt={product.product_name}
                                            style={{ width: '50px', height: '50px' }}
                                        />
                                    </td>
                                    <td>{product.id}</td>
                                    <td>{product.price}</td>
                                    <td className="justify-content-center">
                                        <Link
                                            to={`/product-detail?id=${product.id}`}
                                            className="btn btn-sm text-white me-2 mb-2"
                                            style={{ backgroundColor: '#F8669E' }}
                                        >
                                            View
                                        </Link>

                                        <Link
                                            to={`/update?id=${product.id}`}
                                            className="btn btn-sm text-white me-2 mb-2"
                                            style={{ backgroundColor: '#F8669E' }}
                                        >
                                            Update
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="btn btn-sm text-white mb-2"
                                            style={{ backgroundColor: '#F8669E' }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination Controls */}
                    <div className="d-flex justify-content-center mt-4">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    >
                                        Previous
                                    </button>
                                </li>
                                {[...Array(totalPages).keys()].map((pageNum) => (
                                    <li
                                        key={pageNum}
                                        className={`page-item ${
                                            currentPage === pageNum + 1 ? 'active' : ''
                                        }`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(pageNum + 1)}
                                        >
                                            {pageNum + 1}
                                        </button>
                                    </li>
                                ))}
                                <li
                                    className={`page-item ${
                                        currentPage === totalPages ? 'disabled' : ''
                                    }`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            ) : (
                <p className="mt-3">No products available.</p>
            )}
        </div>
    );
}

export default ViewAll;
