//

function getAllUser() {
  try {
    //
    //
    //
    return { statusCode: 200, users: [], total: 233 };
  } catch (error) {
    return {
      statusCode: 500,
      message: "internal server error",
      errors: [error.message],
    };
  }
}

function deleteUser(id) {
  return { statusCode: 200, users: {}, deleted: true, id };
}

module.exports = { getAllUser, deleteUser };
