<!-- info about api start -->

# REST API comment-api

this is a simple api to distribute comment

## Install

    npm install

## Run the app

    npm start

# REST API

The REST API to the example app is described below.

<!-- info about api end -->
<!-- get all comment start -->

**get all comment**

---

Returns json data about a all comment.

- **URL**

  /api/v1/

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{"success":true,"data":[{"user":{"image":{"png":"./assets/images/avatars/image-amyrobson.png","webp":"./assets/images/avatars/image-amyrobson.png"},"username":"amyrobson"},"_id":"6204311948e7b7bb74134aa2","content":"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.","score":3,"replays":["6204318e48e7b7bb74134aa5"],"isReplayFor":[],"isYou":false,"createdAt":"2022-02-09T21:24:41.720Z","updatedAt":"2022-02-10T12:11:10.233Z","__v":0}]}`

- **Error Response:**

  - **Code:** 500 <br />
    **Content:** `{ success: false , error}`

  OR

- **Sample Call:**

  ```javascript
  await axios.get(".. your server name .../api/v1/");
  ``

  ```
  <!-- get all comment end -->

  <!-- get a single comment start -->

  **get a single comment**

---

Returns json data about a single comment.

- **URL**

  /api/v1/:id

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{"success":true,"data":{"user":{"image":{"png":"./assets/images/avatars/image-ramsesmiron.png","webp":"./assets/images/avatars/image-ramsesmiron.png"},"username":"ramsesmiron"},"_id":"6204318e48e7b7bb74134aa5","content":"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.","score":-1,"replays":[],"isReplayFor":["6204311948e7b7bb74134aa2"],"isYou":false,"createdAt":"2022-02-09T21:26:38.589Z","updatedAt":"2022-02-10T12:09:06.070Z","__v":0}}`

- **Error Response:**

  - **Code:** 500 <br />
    **Content:** `{ success: false , error}`

  OR

- **Sample Call:**

  ```javascript
  await axios.get(".. your server name .../api/v1/6204311948e7b7bb74134aa2");
  ``;
  ```

  <!-- get a single comment end -->
  <!-- add new comment start -->

  **add new comment**

---

Returns json data about new comment you added.

- **URL**

  /api/v1/

- **Method:**

  `POST`

- **header data**

  **Required:**
  None

- **URL Params**

  **Required:**
  None

- **Data body Params**
  **Required:**
  `content="String"`
  `username="String"`
  if this comment is a reply for ather comment please add his id = { isReplayFor="String" }

- **Success Response:**

  - **Code:** 201 <br />
    **Content:** `{ "success": true }`

- **Error Response:**

  - **Code:** 400 bad request <br />
    **Content:** `{ success: false, error }`

- **Sample Call:**

  ```javascript
  ObjectData = {
    content: "iphone",
    username: "user-name",
    isReplayFor: "6204318e48e7b7bb74134aa5",
  };
  await axios.post(".. your server name .../api/v1/", ObjectData);
  ```

  <!-- add new comment end -->

<!-- delete comment start -->

**delete comment**

---

Returns json data about delete success.

- **URL**

  /api/v1/:commentID

- **Method:**

  `DELETE`

- **header data**

  **Required:**
  None

- **URL Params**

  **Required:**
  None

- **Data Params**
  **Required:**
  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ success: true, msg: "comment was deleted" }`

- **Error Response:**

  - **Code:** 400 bad request <br />
    **Content:** `{ success: false}`
    OR

- **Code:** 500 <br />
  **Content:** `{ success: false, error }`

- **Sample Call:**

  ```javascript
  await axios.delete(".. your server name .../api/v1/:commentID");
  ```

  <!-- delete comment end -->

  **update comment**

---

Returns json data about updated success.

- **URL**

  /api/v1/:commentID

- **Method:**

  `PATCH`

- **header data**

  **Required:**
  None

- **URL Params**

  **Required:**
  None

- **Data Params**
- `your data you wont to updated like {
- content: { type: String },
  score: { type: Number, },
  user: {
  image: {
  png: {type: String,},
  webp: { type: String },
  },
  username: {type: String},
  },
  isYou: {type: Boolean,},}`
  **Required:**
  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ success: true, data: updatedComment }`

- **Error Response:**

  - **Code:** 400 bad request <br />
    **Content:** `{ success: false, }`
    OR

- **Code:** 500 <br />
  **Content:** `{ success: false, error }`

- **Sample Call:**

  ```javascript
  ObjectData = {
    content: "new content",
    score: 12,
  };
  await axios.patch(".. your server name .../api/v1/:commentID", ObjectData);
  ```

  <!-- update comment start -->

<!-- update comment end -->
