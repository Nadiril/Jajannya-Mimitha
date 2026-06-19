'use client';

import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useNotification } from '@/context/NotificationContext';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, qrisImageUrl, clearCart } =
    useCart();
  const { addNotification } = useNotification();
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [orderReceived, setOrderReceived] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    paymentMethod: 'qris',
  });
  const [errors, setErrors] = useState({});

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const parsePrice = (price) => {
    return parseInt(price.replace(/[^0-9]/g, ''), 10);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Nama tidak boleh kosong';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor HP tidak boleh kosong';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Format nomor HP tidak valid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const paymentLabel = formData.paymentMethod === 'qris' ? 'QRIS' : 'COD (Bayar di Tempat)';

    const checkoutMessage = encodeURIComponent(
      `Halo Jajanan Mimitha\n\n*Data Pemesanan:*\nNama: ${formData.name}\nNo HP: ${formData.phone}\n\nMetode Pembayaran: ${paymentLabel}\n\n*Detail Pesanan:*\n${cartItems
        .map(
          (item) =>
            `- ${item.name} x${item.quantity} (${formatPrice(parsePrice(item.price) * item.quantity)})`
        )
        .join('\n')}\n\n*Total: ${formatPrice(totalPrice)}*`
    );

    const whatsappNumber = '6283848922906';
    window.open(
      `https://wa.me/${whatsappNumber}?text=${checkoutMessage}`,
      '_blank'
    );

    clearCart();
    setShowPaymentForm(false);
    setOrderReceived(true);
    setIsCartOpen(true);
    setFormData({ name: '', phone: '', paymentMethod: 'qris' });
    addNotification(
      'Pesanan telah diterima. Terima kasih telah memesan di Jajanan Mimitha.',
      'success',
      5000
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const closeCartDrawer = () => {
    setIsCartOpen(false);
    setOrderReceived(false);
  };

  const shouldShowFooter = cartItems.length > 0 || orderReceived;
  const showCartSummary = !showPaymentForm && !orderReceived;
  const showOrderReceived = orderReceived;
  const showPaymentControls = showPaymentForm && !orderReceived;

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className="fixed inset-0 z-[90] bg-black/30 backdrop-blur-sm"
        onClick={closeCartDrawer}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className="fixed right-0 top-0 z-[100] flex h-screen w-full max-w-sm flex-col bg-mimitha-cream shadow-2xl lg:w-[420px]"
        role="dialog"
        aria-modal="true"
        aria-label="Keranjang Belanja"
      >
        {/* Drawer header - FIXED TOP */}
        <div className="flex-none flex items-center justify-between border-b border-mimitha-primary/10 px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-mimitha-primary">
              Keranjang Belanja
            </p>
            <h2 className="text-2xl font-black text-mimitha-text">
              Ringkasan Pesanan
            </h2>
          </div>

          <button
            onClick={closeCartDrawer}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-mimitha-text shadow-sm"
            aria-label="Tutup keranjang belanja"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable content area */}
        {cartItems.length === 0 ? (
          orderReceived ? (
            <div className="flex-1 overflow-y-auto px-6 py-16 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-lg font-bold text-mimitha-text">
                Pesanan Telah Diterima
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mimitha-muted">
                Terima kasih telah memesan di Jajanan Mimitha. Kami akan segera
                memproses pesanan Anda.
              </p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto px-6 py-16 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-mimitha-warm/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-mimitha-primary"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <p className="text-lg font-bold text-mimitha-text">
                Keranjang belanja masih kosong
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mimitha-muted">
                Tambahkan produk favorit Anda ke dalam keranjang
              </p>
            </div>
          )
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="flex gap-4 rounded-lg border border-mimitha-primary/10 bg-white p-4"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-mimitha-text">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-mimitha-primary">
                      {formatPrice(parsePrice(item.price))}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.name, item.quantity - 1)
                        }
                        className="flex h-7 w-7 items-center justify-center rounded border border-mimitha-primary/20 text-sm font-semibold text-mimitha-primary bg-mimitha-warm"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.name, item.quantity + 1)
                        }
                        className="flex h-7 w-7 items-center justify-center rounded border border-mimitha-primary/20 text-sm font-semibold text-mimitha-primary bg-mimitha-warm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="mt-1 flex h-8 w-8 items-center justify-center rounded-full text-mimitha-muted bg-transparent"
                    aria-label="Hapus dari keranjang"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                  </button>
                </div>
              ))}

              {/* Payment form - inside scrollable area */}
              {showPaymentForm && (
                <form id="payment-form" onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-mimitha-text">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama Anda"
                      className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-mimitha-primary/20 focus:ring-mimitha-primary/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-mimitha-text">
                      Nomor HP
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Contoh: 08xxxxxxxxxx"
                      className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-mimitha-primary/20 focus:ring-mimitha-primary/20'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-mimitha-text">
                      Total Pemesanan
                    </label>
                    <div className="rounded-lg border border-mimitha-primary/20 bg-mimitha-warm/30 px-4 py-3">
                      <p className="text-lg font-bold text-mimitha-primary">
                        {formatPrice(totalPrice)}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-mimitha-text">
                      Metode Pembayaran
                    </label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-mimitha-primary/20 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-mimitha-primary/20"
                    >
                      <option value="qris">QRIS</option>
                      <option value="cod">COD (Bayar di Tempat)</option>
                    </select>
                  </div>

                  {formData.paymentMethod === 'qris' && (
                    <div className="mt-4 rounded-xl border border-mimitha-primary/10 bg-white p-4 text-center">
                      <p className="mb-3 text-sm font-semibold text-mimitha-text">
                        Scan QR Code untuk Pembayaran
                      </p>
                      <img
                        src={qrisImageUrl}
                        alt="QRIS Pembayaran"
                        className="mx-auto h-auto w-48"
                      />
                      <p className="mt-3 text-xs text-mimitha-muted">
                        Setelah scan/transfer, klik tombol di bawah ini
                      </p>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        )}

        {/* Fixed footer - only action buttons */}
        {shouldShowFooter && (
          <div className="flex-none border-t border-mimitha-primary/10 px-6 py-5">
            {showCartSummary && (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-semibold text-mimitha-text">Total:</span>
                  <span className="text-2xl font-black text-mimitha-primary">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPaymentForm(true)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-mimitha-primary px-5 py-3 text-sm font-bold text-white"
                >
                  Lanjutkan Pembayaran
                </button>
              </>
            )}
            {showOrderReceived && (
              <button
                type="button"
                onClick={closeCartDrawer}
                className="inline-flex w-full items-center justify-center rounded-full bg-mimitha-primary px-5 py-3 text-sm font-bold text-white"
              >
                Tutup Keranjang
              </button>
            )}
            {showPaymentControls && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowPaymentForm(false)}
                  className="flex-1 rounded-full border border-mimitha-primary px-4 py-2.5 text-sm font-bold text-mimitha-primary bg-transparent"
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  form="payment-form"
                  className="flex-1 rounded-full bg-mimitha-primary px-4 py-2.5 text-sm font-bold text-white"
                >
                  Konfirmasi Pesanan
                </button>
              </div>
            )}
          </div>
        )}
      </aside>
    </>
  );
}
