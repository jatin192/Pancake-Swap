let ERC_20_ABI =["function decimals() public view returns (uint8)"]; //This is to provide decimal places for your token == kitne decimal places oint hone chahea



// Pancake_Rounter_address -> contract ->  ctrl + f   
let Pancake_Factory_ABI = ["function getPair(address tokenA, address tokenB) external view returns (address pair)"] //getPair is like liquidity pool ,it will return the address of liquidity provider contract that handle the tokenA & tokenB  
// Pancake Factory Contract -> Read contract -> getPair(WBNB,BUSD) -> 0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16



//0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16 -> contract -> ctrl + f 
let pair_ABI =["function token0() external view returns (address)",
               "function token1() external view returns (address)",
               "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);"]


// Pancake_Rounter_address -> contract ->  ctrl + f               
let Pancake_Rounter_ABI = ["function getAmountsOut(uint amountIn, address[] memory path)public view returns (uint[] memory amounts)"]



module.exports = {Pancake_Rounter_ABI,pair_ABI,Pancake_Factory_ABI,ERC_20_ABI};