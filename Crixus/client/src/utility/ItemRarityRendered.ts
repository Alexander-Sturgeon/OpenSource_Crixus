function ItemRarityRendered(prop:number | undefined){
    var renderedRarity:string = "none";
    if (prop == 3){
        renderedRarity = "green";
    }else if(prop == 2){
        renderedRarity = "blue";
    }else if(prop == 1){
        renderedRarity = "rgba(204, 85, 0, .8)";
    }else{
        renderedRarity = "transparent";
    }
        

    return(renderedRarity)
}

export default ItemRarityRendered;