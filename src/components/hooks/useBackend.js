export default function useBackend() {
    const accessToken = "4wC8KI4ZEfciLyeyj7oHOB84LvEgSuro"
    const backendUrl = "http://demo2.z-bit.ee"

    const sendRequest = (url, method, body) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+accessToken);
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json"); // <---------------

        var requestOptions = {
            method: method,
            headers: myHeaders,
            redirect: 'follow'
        };

        // Don't add body when method is found in noBodyMethods array
        const noBodyMethods = ["GET", "DELETE", "HEAD", "OPTIONS"]
        if (!noBodyMethods.includes(method.toUpperCase())) {
            requestOptions.body = JSON.stringify(body) // <----------------------
        }

        return fetch(backendUrl + url, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    }

    return {
        sendRequest
    }
}