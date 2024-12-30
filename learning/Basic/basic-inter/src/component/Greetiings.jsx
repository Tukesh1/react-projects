function Greeting(){
    const date = new Date()
    return <div>
        <h1>Hii, welcome (-""-)</h1>
        <p>Today is date: {date.getDate()} Dec</p>
    </div>
}
export default Greeting