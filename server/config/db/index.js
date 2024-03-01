const init_db = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "metadata",
  });
  connection.connect(function (err) {
    if (err) throw err;
    console.log("You are now connected with mysql database...");
  });
};

export default init_db;
