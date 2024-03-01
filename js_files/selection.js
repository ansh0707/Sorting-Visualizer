async function selection(){
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for(let i=0;i<ele.length;i++){
        let min_idx=i;

        ele[i].style.backgroun='blue';
        for(let j=i+1;j<ele.length;j++){
            ele[j].style.background='red';
            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_idx].style.height)){
                if(min_idx!==i){
                    ele[min_idx].style.background='cyan';
                }
                min_idx=j;
            }
            else{
                ele[j].style.background='cyan';
            }
        }

        await waitforme(delay);
        swap(ele[min_idx],ele[i]);

        ele[min_idx].style.background='cyan';
        ele[i].style.background='green';
    }
}

const selectionSortBtn=document.querySelector(".selectionSort");
selectionSortBtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});