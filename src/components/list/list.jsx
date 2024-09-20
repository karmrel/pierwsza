function List(){
    const numbers=[12,32,43,323,534,432,32,43]
    
    const numbers2=numbers.map((value)=>value*100)
    
    const people=[{name: "Jan", age:"12"}]
    console.log(numbers,numbers2)

    return<>
    <div>
        {numbers2.map((value,i)=>{return <span  key={i}>{value},</span>})}
    </div>
    <div className="list">
        {people.map((val,i)=>{return <div key={i} className="person"><p>Imię: {val.name}</p><p>Wiek:{val.age}</p></div>})}
    </div>
    </>
}
export default List