class OrderBook{
        constructor(symbol="BTCUSD"){
            this.symbol=symbol
            this.bids=[],
        this.ask=[],
    this._nextid=1,
    this.lastTradedPrice=null       
        
    }
    //helper
    _generatorderID(){
        return this._nextid++;
    }
    _sort(sides){
if(sides=="BUY"){
this.bids.sort((a,b)=>{ 
    if(a.price!=b.price){
        return b.price-a.price;
    }
    return a.timestamp-b.timestamp;
}
)}
else{
    
}    }
//public function
placeOrder(){

}
_marketMatch(){

}
_limitMatch(){

}
}
let BTCUSDOrderbook =new OrderBook()
     
BTCUSDOrderbook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:100,quantity:10,timestamp:Date.now(),user:"Ritik"})

BTCUSDOrderbook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:98,quantity:10,timestamp:Date.now(),user:"KumarSanu"})

BTCUSDOrderbook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:99,quantity:10,timestamp:Date.now(),user:"Bhopal"})

BTCUSDOrderbook._sort("BUY")
console.log(BTCUSDOrderbook.bids);
