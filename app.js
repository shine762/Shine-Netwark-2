// Data fetch karne ka example
async function loadData() {
    const { data, error } = await supabase
        .from('messages') // Jo table aapne banayi thi
        .select('*');

    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', data);
        document.getElementById('output').innerText = JSON.stringify(data);
    }
}

loadData();
