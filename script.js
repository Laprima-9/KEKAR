   // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Order form submission
        document.getElementById('orderForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            // const phone = document.getElementById('phone').value;
            // const address = document.getElementById('address').value;
            const sosisQty = document.getElementById('sosisQty').value;
            const pentolQty = document.getElementById('pentolQty').value;
            const notes = document.getElementById('notes').value;

            // Validate at least one item
            if (parseInt(sosisQty) === 0 && parseInt(pentolQty) === 0) {
                alert('Mohon pilih minimal 1 menu!');
                return;
            }

            // Calculate total
            const sosisPrice = 5000;
            const pentolPrice = 4000;
            const total = (sosisQty * sosisPrice) + (pentolQty * pentolPrice);

            // Create WhatsApp message
            let message = `*PESANAN BARU KEKAR*%0A%0A`;
            message += `Nama: ${name}%0A`;
            // message += `No. HP: ${phone}%0A`;
            // message += `Alamat: ${address}%0A%0A`;
            message += `*PESANAN:*%0A`;
            
            if (parseInt(sosisQty) > 0) {
                message += `- Sosis Bakar: ${sosisQty} porsi (Rp ${(sosisQty * sosisPrice).toLocaleString('id-ID')})%0A`;
            }
            if (parseInt(pentolQty) > 0) {
                message += `- Pentol Bakar: ${pentolQty} porsi (Rp ${(pentolQty * pentolPrice).toLocaleString('id-ID')})%0A`;
            }
            
            message += `%0A*TOTAL: Rp ${total.toLocaleString('id-ID')}*%0A`;
            
            if (notes) {
                message += `%0ACatatan: ${notes}%0A`;
            }

            // Replace with your WhatsApp number (without + and -)
            const whatsappNumber = '6287820145557';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
            
            window.open(whatsappUrl, '_blank');
        });

        // Navbar background on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(31, 31, 31, 0.98)';
            } else {
                navbar.style.backgroundColor = 'var(--black)';
            }
        });
