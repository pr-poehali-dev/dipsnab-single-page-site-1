import Icon from "@/components/ui/icon";

export interface CartItem {
  id: string;
  size: string;
  qty: number;
  season: string;
  purpose: string;
}

interface CartDrawerProps {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

const CartDrawer = ({ open, items, onClose, onRemove }: CartDrawerProps) => {
  if (!open) return null;

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl animate-slide-right flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-heading font-bold text-xl text-ds-dark">
            Корзина <span className="text-ds-gray text-base font-normal">({totalItems} шт)</span>
          </h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="ShoppingBag" size={28} className="text-ds-gray" />
              </div>
              <p className="text-ds-gray font-body">Корзина пуста</p>
              <p className="text-xs text-ds-gray/70 mt-1 font-body">Выберите размер и добавьте товар</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <div>
                    <p className="text-sm font-body font-medium text-ds-dark">
                      Комплект — размер <span className="font-heading font-bold text-ds-red">{item.size}</span>
                    </p>
                    <p className="text-xs text-ds-gray mt-0.5">{item.season} / {item.purpose}</p>
                    <p className="text-xs text-ds-dark font-medium mt-1">{item.qty} шт</p>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="p-2 rounded-lg hover:bg-red-50 hover:text-ds-red transition-colors text-ds-gray"
                  >
                    <Icon name="Trash2" size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100">
            <button className="w-full bg-ds-red text-white py-3.5 rounded-xl font-body font-semibold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-200 flex items-center justify-center gap-2">
              <Icon name="Send" size={16} />
              Оформить заявку
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
