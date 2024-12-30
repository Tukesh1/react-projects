
function ListOfProducts() {
    const userInfo = [
        { name: "Alice Johnson", email: "alice.johnson@example.com", age: 28, ctc: 50000 },
        { name: "Bob Smith", email: "bob.smith@example.com", age: 34, ctc: 75000 },
        { name: "Charlie Brown", email: "charlie.brown@example.com", age: 25, ctc: 60000 },
        { name: "Diana Prince", email: "diana.prince@example.com", age: 30, ctc: 80000 },
        { name: "Ethan Hunt", email: "ethan.hunt@example.com", age: 27, ctc: 55000 },
        { name: "Fiona Adams", email: "fiona.adams@example.com", age: 29, ctc: 67000 },
        { name: "George Bailey", email: "george.bailey@example.com", age: 32, ctc: 72000 },
        { name: "Hannah Clark", email: "hannah.clark@example.com", age: 26, ctc: 48000 },
        { name: "Ian Wright", email: "ian.wright@example.com", age: 35, ctc: 90000 },
        { name: "Julia Roberts", email: "julia.roberts@example.com", age: 31, ctc: 77000 }
    ];
    
    

    return <main>
         {userInfo.map(({name,email,age,ctc})=>(
            <div key={Math.random()}>
                <div className="bg-slate-400">{name}</div>

            </div>
         ))}
    </main>


} 
export default ListOfProducts