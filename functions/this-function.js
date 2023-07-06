function tryMe() {
  console.log('1. Inside tryMe:', this);
  const photo = this;

  function innerFunc() {
    console.log('2. Inside innerFunc:', photo);

    const iiF2 = () => {
      console.log('Inside iiF2: ', photo);
    };

    iiF2();
  }

  function tryMeV2() {
    console.log('3. Inside tryMeV2:', photo);

    const tryMeV21 = () => {
      console.log('3.1. Inside tryMeV2:', photo);
    };

    tryMeV21();
  }

  innerFunc();
  tryMeV2();
}

tryMe.call({ name: 'Ankit', city: 'Morena' });
