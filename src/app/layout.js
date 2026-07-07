export default function Mainlayout({ children }) {
  return (
   <html>
    <head>
    <meta charSet="utf-8"/>
    <title>E-Shop - Online Shop Website Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta content="Free HTML Templates" name="keywords"/>
    <meta content="Free HTML Templates" name="description"/>

    <link href="/static/img/favicon.ico" rel="icon"/>

    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>  

    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>

    
    <link href="/static/lib/animate/animate.min.css" rel="stylesheet"/>
    <link href="/static/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>

  
    <link href="/static/css/style.css" rel="stylesheet"/>
</head>
<body>
  {children}
    <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>


   
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="/static/lib/easing/easing.min.js"></script>
    <script src="/static/lib/owlcarousel/owl.carousel.min.js"></script>

   
    <script src="/static/mail/jqBootstrapValidation.min.js"></script>
    <script src="/static/mail/contact.js"></script>

   
    <script src="/static/js/main.js"></script>
</body>
   </html>
  );
}
