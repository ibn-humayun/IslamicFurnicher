import { jsx } from 'hono/jsx'

export const CheckoutForm = (props: { productName: string, price: number }) => {
  return (
    <div class="checkout-form" id="checkout">
      <h2>অর্ডার করতে আপনার তথ্য দিন</h2>
      <p>পণ্য: {props.productName} - মূল্য: ৳ {props.price}</p>
      
      <form action="/api/order" method="post" class="checkout-form-main">
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
          <textarea name="address" required placeholder="আপনার পুরো ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা) লিখুন" rows={3}></textarea>
        </div>
        
        <button type="submit" class="btn-submit-order">
          অর্ডার কনফার্ম করুন
        </button>

        <div class="trust-badges">
          <span>📦 ক্যাশ অন ডেলিভারি</span>
          <span>🚚 দ্রুত শিপিং</span>
          <span>✨ প্রিমিয়াম কোয়ালিটি</span>
        </div>
      </form>
    </div>
  )
}
