module.exports = class controllerNumber {
  // Cadastro
  static async checkPar(req, res) {
    const { number } = req.body;
    if (number % 2 === 0) {
      res.status(200).json({ message: "É par!" });
    } else {
      res.status(200).json({ message: "É ímpar!" });
    }
  }

  static async checkPrimo(req, res) {
    const { number } = req.body;

    function isPrimo(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }

    if (isPrimo(number)) {
      res.status(200).json({ message: "É primo!" });
    } else {
      res.status(200).json({ message: "Não é primo!" });
    }
  }
};
