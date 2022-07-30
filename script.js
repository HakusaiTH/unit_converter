const my_list = document.querySelector('#my_list');
const name_ = document.querySelector('#name');

fetch('https://reqres.in/api/users?page=2')
.then((respon) => {
    return respon.json();
})
.then((json) => {
    const data = json.data;
    data.forEach(data_item => {
        const list_item = document.createElement('li');
        list_item.classList.add('my_list');

        const name_ = document.createElement('h3');
        name_.classList.add('list_item');

        name_ .innerHTML = data_item.first_name + " " + data_item.last_name ;

        list_item.append(name_)
        my_list.append(list_item)
    });

})
.catch((error) => {
    console.log(error.message);
})