const url = "http://172.17.0.2:9000/persons";

const deletePerson = async (id) => {
  try {
    const response = await fetch(url + '/' + id, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log('Person deleted successfully');
      fetchAPI(); // Refresh the displayed persons
    } else {
      console.error('Error:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

async function fetchAPI() {
  try {
    let response = await fetch(url);
    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.ok) {
      let data = await response.json();
      // handle data
      console.log(data);

      let container = document.querySelector('.tbody');
      container.innerHTML = ''; // Clear the container before appending new data

      data.forEach(person => {
        let htmlSegment = `
          <tr>
            <th scope="row">${person.id}</th>
            <td>${person.name}</td>
            <td>${person.age}</td>
            <td>${person.gender}</td>
            <td>${person.email}</td>
            <td>
              <div class="action">
              <button type="button" class="btn btn-info" onclick="openUpdateModal('${person.id}')">Update</button>
                <button type="button" class="btn btn-danger" onclick="deletePerson('${person.id}')">Delete</button>
              </div>
            </td>
          </tr>
        `;
        container.innerHTML += htmlSegment;
      });
    }
  } catch (error) {
    console.error('Error:', error);
  }
}


// Function to handle form submission
const handleCreate = async () => {

  // Get the data from the form
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const email = document.getElementById('email').value;

  // Create the data payload
  const payload = {
    name: name,
    age: age,
    gender: gender,
    email: email
  };

  // Make the API request to create the data
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('Data created successfully');
      fetchAPI(); // Refresh the displayed persons
    } else {
      console.error('Error:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Add event listener to the create form
document.getElementById('createForm').addEventListener('submit', (event) => {
  event.preventDefault();
  handleCreate();
});





const openUpdateModal = (id) => {
  // Retrieve other data and set form values

  // Set the ID as a data attribute on the form
  document.getElementById('updateForm').setAttribute('data-id', id);

  // Open the modal
  $('#updateModal').modal('show');
};

// Function to handle form submission
const handleUpdate = async (event) => {
  event.preventDefault();

  // Get the updated data from the form
  const id = document.getElementById('updateForm').getAttribute('data-id');
  const name = document.getElementById('nametoUpdate').value;
  const age = document.getElementById('agetoUpdate').value;
  const email = document.getElementById('emailtoUpdate').value;
  // Retrieve other data from the form

  // Make the API request to update the data
  try {
    const response = await fetch(url + '/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, age, email })
    });

    if (response.ok) {
      console.log('Data updated successfully');
      fetchAPI(); // Refresh the displayed persons
    } else {
      console.error('Error:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }

  // Close the modal after update
  $('#updateModal').modal('hide');
};

// Add event listener to the update form
document.getElementById('updateForm').addEventListener('submit', handleUpdate);



fetchAPI();

