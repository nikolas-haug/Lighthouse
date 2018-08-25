export default {

  HandleLoginError: (message) => {
    if (message === 'Unauthorized') {
      return {
        errorMessage: {
          error: "Wrong username and or password!"
        }
      }
    } else if (message === 'Bad Request') {
      return {
        errorMessage: {
          error: "Missing credentials!"
        }
      }
    } else {
      return {
        errorMessage: {
          error: "Something went wrong! Check your credentials and try again."
        }
      }
    }
  },
};