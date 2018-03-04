var  express=require('express');
var  app=express();
var mysql=require('mysql');

/**
 * connect to MySql
 */
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'ecoschool',
    port:'3306'
});
connection.connect();
app.get('/',function (req,res) {
    res.sendfile(__dirname + "/" + "index.html" );
})

/**
 * login function
 */
app.get('/login',function (req,res) {
    var  name=req.query.name;
    var pwd=req.query.pwd;
    // var school_name=req.query.school_name;

    var selectSQL = "select * from user where uname = '"+name+"' and pwd = '"+pwd+"'";
    connection.query(selectSQL,function (err,rs) {
        if (err) throw  "Error! the s";
        console.log(rs);
        console.log('OK');
        res.sendfile(__dirname + "/" + "Log.html" );


});})



// app.post('/Log.html', function (req, res) {
//
// var response = {
// "School Name":req.body.name
// };
// })

app.get('/register.html',function (req,res) {
    res.sendfile(__dirname+"/"+"register.html");
})

/**
 * register
 */
app.get('/register',function (req,res) {
    var  name=req.query.name;
    var  pwd=req.query.pwd;
    var school_name=req.query.school_name;
    var  user={uname:name,pwd:pwd,school_name:school_name};
    connection.query('insert into user set ?',user,function (err,rs) {
        if (err) throw  err;
        console.log('ok');
        res.sendfile(__dirname + "/" + "index.html" );
    })
})




var server=app.listen(7744,function () {
    console.log("start");
})
