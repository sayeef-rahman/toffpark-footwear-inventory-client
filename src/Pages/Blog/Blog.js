import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-center  mx-auto container-md'>
                <h1 className='text-success m-3'>Get some Knowledge</h1>
                <h5 className='m-3'>Difference between Javascript & NodeJS</h5>
                <table className="table table-bordered border-secondary table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">Javascript</th>
                            <th scope="col">NodeJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-info'>
                            <td>Javascript is a programming language that is used for writing scripts on the website.</td>
                            <td>NodeJS is a Javascript runtime environment.</td>
                        </tr>
                        <tr>
                            <td>Javascript can only be run in the browsers.</td>
                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                        </tr>
                        <tr className='table-info'>
                            <td>It is basically used on the client-side.</td>
                            <td>It is mostly used on the server-side.</td>
                        </tr>
                        <tr>
                            <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                            <td>Nodejs does not have capability to add HTML tags.</td>
                        </tr>
                        <tr className='table-info'>
                            <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</td>
                            <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>
                        </tr>
                        <tr>
                            <td>Javascript is used in frontend development.</td>
                            <td>Nodejs is used in server-side development.</td>
                        </tr>
                        <tr className='table-info'>
                            <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc.</td>
                            <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </td>
                        </tr>
                        <tr>
                            <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
                            <td>Nodejs is written in C, C++ and Javascript.</td>
                        </tr>
                    </tbody>
                </table>
                <h5 className='m-3'> When should you use NodeJS & when should you use MongoDB?</h5>
                <p>
                    <span className='fw-bolder'>NodeJS:</span> <br />
                    Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...
                    So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it. <br />
                    <span className='fw-bolder'>MongoDB:</span> <br />
                    If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.
                </p>
            </div>
            <div className=' mx-auto text-center container-md'>
                <h5 className='m-3'>Difference between SQL and NoSQL Database?</h5>
                <table className="table table-bordered border-secondary table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">SQL</th>
                            <th scope="col">NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-info'>
                            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                            <td>Non-relational or distributed database system.</td>
                        </tr>
                        <tr>
                            <td>These databases have fixed or static or predefined schema</td>
                            <td>They have dynamic schema</td>
                        </tr>
                        <tr className='table-info'>
                            <td>These databases are not suited for hierarchical data storage.</td>
                            <td>These databases are best suited for hierarchical data storage.</td>
                        </tr>
                        <tr>
                            <td>These databases are best suited for complex queries</td>
                            <td>These databases are not so good for complex queries</td>
                        </tr>
                        <tr className='table-info'>
                            <td>Vertically Scalable</td>
                            <td>Horizontally scalable</td>
                        </tr>
                        <tr>
                            <td>Follows ACID property</td>
                            <td>Follows CAP(consistency, availability, partition tolerance)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blog;