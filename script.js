function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const result = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid number");
    return;
  }

  const rates = {
    USD: { USD:1, EUR:0.93, GBP:0.79, NGN:1600, JPY:145, CAD:1.35, AUD:1.50, CHF:0.91, CNY:6.92, INR:82, KRW:1345, BTC:0.000041 },
    EUR: { USD:1.08, EUR:1, GBP:0.85, NGN:1720, JPY:156, CAD:1.45, AUD:1.61, CHF:0.98, CNY:7.46, INR:88, KRW:1448, BTC:0.000044 },
    GBP: { USD:1.27, EUR:1.18, GBP:1, NGN:2000, JPY:183, CAD:1.70, AUD:1.88, CHF:1.15, CNY:8.75, INR:104, KRW:1715, BTC:0.000052 },
    NGN: { USD:0.00063, EUR:0.00058, GBP:0.0005, NGN:1, JPY:0.091, CAD:0.00068, AUD:0.00063, CHF:0.00046, CNY:0.0044, INR:0.052, KRW:0.86, BTC:0.000000026 },
    JPY: { USD:0.0069, EUR:0.0064, GBP:0.0055, NGN:11, JPY:1, CAD:0.0093, AUD:0.010, CHF:0.0063, CNY:0.048, INR:0.57, KRW:9.4, BTC:0.00000028 },
    CAD: { USD:0.74, EUR:0.69, GBP:0.59, NGN:1480, JPY:108, CAD:1, AUD:1.10, CHF:0.67, CNY:5.18, INR:61, KRW:1013, BTC:0.000031 },
    AUD: { USD:0.67, EUR:0.62, GBP:0.53, NGN:1340, JPY:98, CAD:0.91, AUD:1, CHF:0.61, CNY:4.70, INR:55, KRW:915, BTC:0.000028 },
    CHF: { USD:1.10, EUR:1.02, GBP:0.87, NGN:1750, JPY:160, CAD:1.49, AUD:1.64, CHF:1, CNY:7.61, INR:90, KRW:1470, BTC:0.000045 },
    CNY: { USD:0.145, EUR:0.134, GBP:0.114, NGN:230, JPY:21, CAD:0.193, AUD:0.213, CHF:0.13, CNY:1, INR:11.8, KRW:193, BTC:0.000006 },
    INR: { USD:0.012, EUR:0.011, GBP:0.0096, NGN:19.0, JPY:1.7, CAD:0.016, AUD:0.018, CHF:0.011, CNY:0.085, INR:1, KRW:16.3, BTC:0.00000051 },
    KRW: { USD:0.00074, EUR:0.00069, GBP:0.00058, NGN:1.1, JPY:0.11, CAD:0.00099, AUD:0.0011, CHF:0.00068, CNY:0.0052, INR:0.061, KRW:1, BTC:0.000000031 },
    BTC: { USD:24150, EUR:22400, GBP:19300, NGN:38700000, JPY:3500000, CAD:32500, AUD:36500, CHF:21800, CNY:169000, INR:4760000, KRW:31900000, BTC:1 },
  };

  const converted = amount * rates[from][to];
  result.textContent = `Converted Amount: ${converted.toFixed(4)} ${to}`;
}



// TO DO LIST APP
function addTask(){
  const taskInput = document.getElementById("taskInput");
  const Input = taskInput.value;
  const taskList = document.getElementById("taskList");

  if(Input === ""){
      alert("please enter a text");
      return;
   }

  const li = document.createElement("li");
  li.textContent = Input;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.style.background = "transparent";
  deleteBtn.style.color = "red";
  deleteBtn.style.textDecoration = "underline"

  deleteBtn.onclick = ()=>{
    if(confirm("Do you want to delete")){
    li.remove();
  }
}
  

  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = "";
  
   
}
