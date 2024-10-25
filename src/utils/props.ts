// const props = {
//     name: 'Abby',
//     chat: 'the last of us. Part II',
//     getChat() {
//       this._privateMethod();
//     },
//     _privateMethod() {
//       console.log(this._privateProp);
//     },
//     __privateMethodToo() {},
//     _privateProp: 'Нельзя получить просто так',
//   };
  
//   const checkPrivateProp = prop => prop.startsWith('_');
  
//   const proxyProps = new Proxy(props, {
//     get(target, prop) {
//       if (checkPrivateProp(prop)) {
//         throw new Error("Нет прав");
//       } else {
//         const value = target[prop];
//         return (typeof value === 'function') ? value.bind(target) : value;
//       }
//     },
//     set(target, prop, val) {
//       if (checkPrivateProp(prop)) {
//         throw new Error("Нет прав");
//       } else {
//         target[prop] = val;
//         return true;
//       }
//     },
//     deleteProperty(target, prop) {
//       if (checkPrivateProp(prop)) {
//         throw new Error("Нет прав");
//       } else {
//         delete target[prop];
//         return true;
//       }
//     }
//   });
  
//   proxyProps.getChat();
//   delete proxyProps.chat;
  
//   proxyProps.newProp = 2;
//   console.log(proxyProps.newProp);
  
//   try {
//       proxyProps._newPrivateProp = 'Super game';
//   } catch (error) {
//       console.log(error);
//   }
  
//   try {
//       delete proxyProps._privateProp;
//   } catch (error) {
//       console.log(error); // Error: Нет прав
//   }
  
//   /*
//       * Вывод в консоль следующий:
//   Нельзя получить просто так
//   2
//   Error: Нет прав
//   Error: Нет прав
//   */