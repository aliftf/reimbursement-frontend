export const requestDataResult = {
  "status": "OK",
  "message": "Request data has been fetched!",
  "data": [
    {
      "id": 0,
      "totalAmount": 100000,
      "status": "PENDING",
      "submissionDate": "2026-02-12",
      "items": [
        {
          "description": "ATK",
          "amount": 10000,
          "expenseDate": "2026-02-11"
        },
        {
          "description": "Lisensi",
          "amount": 90000,
          "expenseDate": "2026-02-11"
        }
      ]
    },
    {
      "id": 1,
      "totalAmount": 250000,
      "status": "APPROVED",
      "submissionDate": "2026-02-12",
      "items": [
        {
          "description": "Lisensi",
          "amount": 250000,
          "expenseDate": "2026-02-11"
        }
      ]
    },
    {
      
      "id": 2,
      "totalAmount": 300000,
      "status": "REJECTED",
      "submissionDate": "2026-02-12",
      "items": [
        {
          "description": "Keyboard",
          "amount": 300000,
          "expenseDate": "2026-02-11"
        }
      ]
    }
  ]
};

export const loginResult = {
  token: "abc123",
  expiresIn: 3600
};

export const profileResult = {
  fullName: "Alif Taufiqurrahman",
  workEmail: "alifsafjklas@example.com",
  role: "MANAGER"
};

export function login({ username, password }) {
  if (username === "alif" && password === "123") {
    return loginResult;
  }
}

export function getProfile({ token }) {
  if (!token) {
    const err = new Error("Unauthorized");
    err.status = 403;
    throw err;
  }

  return profileResult;
}