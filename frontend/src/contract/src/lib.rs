use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn swap(amount: u64, fee_rate: f32) -> u64 {
    let fee = ((amount as f32) * fee_rate) as u64;
    amount - fee
}

#[wasm_bindgen]
pub fn get_fee_rate() -> f32 {
    0.001  // 0.1 %
}
