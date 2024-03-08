const cursor = document.getElementById('crusor');
const my_mask = document.getElementById('my_mask');

document.addEventListener('mousemove',(e)=>{
    console.log(my_mask.offsetWidth)
console.log(my_mask.offsetTop)
    setTimeout(()=>{

        const Xaccess = e.pageX +4 
        const Yaccess = e.pageY +4 
        my_mask.style.maskPosition = `${Xaccess- my_mask.offsetWidth}px ${Yaccess-my_mask.offsetTop}px`
        // mask.style.maskPosition =  
        cursor.style.left  = Xaccess + "px"
        cursor.style.top = Yaccess+ "px"
    },150)
})