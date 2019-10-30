class Response {
  static token(message, data) {
    return {
      status: 200,
      message,
      data
    };
  }
}

module.exports = Response;
