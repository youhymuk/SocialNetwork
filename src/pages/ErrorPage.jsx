import React from "react";

const ErrorPage = ({
   match: {
       params: {statusCode},
   },
}) => (
    <div>{statusCode}</div>
);

export default ErrorPage;
