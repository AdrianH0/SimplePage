function reload()
    {
        const now = new Date();
        const hours = now.getHours();
        const minute = now.getMinutes();
        const seconds = now.getSeconds();
        document.getElementById("clock").innerHTML = `${hours}:${minute}:${seconds}`
        setTimeout("reload()", 1000);
    }
