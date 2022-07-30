// Success function post if successful
let box = document.getElementById(`container`);
function success_post(response) {
    box[`innerHTML`] = `<h2>Your post was successful!</h2>`;
}
// failure function //
function failure_post(error) {
    box[`innerHTML`] = `<h2> Sorry please try again </h2>`;
}

function send_post(details) {
    let title = document.getElementById(`title`);
    let title_value = title[`value`];

    let body = document.getElementById(`body`);                 
    let body_value = body[`value`];

    let user_id = document.getElementById(`user_id`);
    let user_id_value = user_id[`value`];
  
    // Adds title,body to posts
 
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {
            title: title_value,
            body: body_value
        }
    }).then(success_post).catch(failure_post);
}
// Event listener // 
let submit = document.getElementById(`submit`);
submit.addEventListener(`click`, send_post);
// success function for patch // 
function success_patch(response) {
    box[`innerHTML`] += `<h2> Update successful! </h2>`;
}
// function failure for patch //
function failure_patch(error) {
    box[`innerHTML`] += `<h2> Please try again update wasn't successful </h2>`;
}

function patch_request(details) {
    let title_value = document.getElementById(`update_title`)[`value`];

    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: `PATCH`,
        data: {
            title: title_value
        }
    }).then(success_patch).catch(failure_patch);
}
// patch button //
let post = document.getElementById(`post`);
post.addEventListener(`click`, patch_request);

// success message for delete request // 
function success_delete(response) {
    box[`innerHTML`] += `<h1> Deleted successfully! </h1>`;
}
// failure message for delete request //
function failure_delete(error) {
    box[`innerHTML`] += `<h1> Sorry something went wrong </h1>`;
}
// delete button //
function delete_request(details) {

    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: `DELETE`

    }).then(success_delete).catch(failure_delete);
}
// function will delete request // 
let delete_button = document.getElementById(`delete`);
delete_button.addEventListener(`click`, delete_request);

// success function if request works //
function success_get(response) {
    box[`innerHTML`] += `<p> posts with title and body  </p>`;
    for (let i = 0; i < response[`data`].length; i++) {
        box[`innerHTML`] += `<h2>Title:${response[`data`][i][`title`]}`;
        box[`innerHTML`] += `<p>Body: ${response[`data`][i][`body`]}</p>`;
    }
}
// function function if request fails //
function failure_get(error) {
    box[`innerHTML`] = `<h1> Sorry something went wrong </h1>`;
}
// function will grab data and run axios //
function get_data(details) {
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `GET`
    }).then(success_get).catch(failure_get);
}
let get = document.getElementById(`get`);
get.addEventListener(`click`, get_data);


