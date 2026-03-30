/** @jsx jsx */
import { jsx } from 'hono/jsx'

export const CheckoutForm = (props: { productName: string, price: number }) => {
  return (
    <div class="checkout-form" id="checkout">
      <h2>অর্ডার করতে আপনার তথ্য দিন</h2>
      <p>পণ্য: {props.productName} - মূল্য: ৳ {props.price}</p>
      
      <form action="/api/order" method="post">
        <div class="form-group">
          <label>আপনার নাম *</label>
          <input type="text" name="name" required placeholder="আপনার নাম লিখুন" />
        </div>
        
        <div class="form-group">
          <label>মোবাইল নাম্বার *</label>
          <input type="tel" name="phone" required placeholder="আপনার মোবাইল নাম্বার লিখুন" />
        </div>
        
        <div class="form-group">
          <label>পুরো ঠিকানা *</label>
          <textarea name="address" required placeholder="আপনার পুরো ঠিকানা লিখুন"></textarea>
        </div>
        
        <div class="form-group">
          <label>ডিস্ট্রিক্ট *</label>
          <select name="district" required>
            <option value="">ডিস্ট্রিক্ট সিলেক্ট করুন</option>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            {/* Other districts */}
          </select>
        </div>
        
        <button type="submit" class="btn" style="width: 100%; border: none; font-size: 1.2rem; cursor: pointer;">
          অর্ডার করুন
        </button>
      </form>
    </div>
  )
}
