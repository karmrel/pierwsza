import './InfoBox.css'

function InfoBox(){
    const name ='kamil'
    let date= new Date().toUTCString()
    var time=""

    return <div>
        <p>{name}</p>
        <p>{date}</p>
        <p>13:30</p>
    </div>
}
export default  InfoBox;
