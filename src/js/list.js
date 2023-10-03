// https://sqqqyffuhusqdvjkshxf.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxcXF5ZmZ1aHVzcWR2amtzaHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMzY4MDcsImV4cCI6MjAxMTkxMjgwN30.-K3pBEiuVw9Mv5jbVumfGHI6bYW6POCXvQuTh_bDzMM

// fetcher data fra supabase og filtrere efter relevant data. 
fetch("https://sqqqyffuhusqdvjkshxf.supabase.co/rest/v1/ux_speakers?select=name,jobposition,about,contact,image", {
    method:"GET",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxcXF5ZmZ1aHVzcWR2amtzaHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMzY4MDcsImV4cCI6MjAxMTkxMjgwN30.-K3pBEiuVw9Mv5jbVumfGHI6bYW6POCXvQuTh_bDzMM"
    }
})
.then(res=>res.json())
.then(showData)

function showData(items){
    console.log(items)
    //items.forEach()
}

//function(){}