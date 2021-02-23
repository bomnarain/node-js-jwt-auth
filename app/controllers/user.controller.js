exports.allAccess = (req, res) => {
    res.status(200).send("공개자료");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("회원공개자료");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("관리자자료");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("중개자자료");
  };