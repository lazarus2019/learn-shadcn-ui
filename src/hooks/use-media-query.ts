import { useEffect, useState } from 'react';

const breakpoints = {
  xxs: '360px',
  xs: '575px',
  xsm: '649px',
  sm: '767px',
  md: '991px',
  lg: '1023px',
  xl: '1199px',
};

type MediaQueryType = keyof typeof breakpoints;

export const mediaQueryBreakpoints = {
  up(query: MediaQueryType) {
    return `(min-width: ${breakpoints[query]})`;
  },
  down(query: MediaQueryType) {
    return `(max-width: ${breakpoints[query]})`;
  },
};

const useMediaQuery = (query: string) => {
  const [isMatches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => {
      setMatches(mediaQuery.matches);
    };

    // Initial check
    updateMatches();

    // Listen for changes in the media query
    const mediaQueryListener = () => {
      updateMatches();
    };
    mediaQuery.addEventListener('change', mediaQueryListener);

    // Clean up listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', mediaQueryListener);
    };
  }, [query]);

  return isMatches;
};

export default useMediaQuery;

// type Prefix = 'prop';
// type Index = '1' | '2' | '3';
// type DynamicKey = `${Prefix}${Index}`;

// type DynamicProps = {
//   [K in DynamicKey]: string;
// };

// const temp: DynamicProps = {
//   prop1: '',
//   prop2: '',
//   prop3: '',
//   prop4: '',
// };

// type KeyPattern<T extends string, U extends Record<string, string | number>> = {
//   [P in `${T}${Capitalize<Extract<keyof U, string>>}`]: U[Extract<
//     keyof U,
//     string
//   >];
// };

// type User = {
//   id: number;
//   name: string;
//   email: 'a';
//   temp: {
//     temp1: string;
//     temp2: boolean;
//   };
// };

// type PrefixedUser = KeyPattern<'user', User>;

// const tempUser: PrefixedUser = {
//   userEmail: '',
//   userId: '',
//   userName: '',
// };

type KeyPattern<T extends string, U extends Record<string, any>> = {
  [P in keyof U as `${T}${Capitalize<P & string>}`]: U[P];
};

type User = {
  id: number;
  name: string;
  email: 'string'; // Changed this to string for consistency
  temp: {
    temp1: string;
    temp2: boolean;
  };
};

type PrefixedUser = KeyPattern<'user', User>;

type Temp = keyof User;

const tempUser: PrefixedUser = {
  userId: 1, // id is a number
  userName: 'John Doe', // name is a string
  userEmail: 'string', // email is a string
  userTemp: {
    temp1: 'temp1',
    temp2: false,
  },
};

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: Type[Property] extends Object
    ? Getters<Type[Property]>
    : Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
  test: {
    a: string;
    b: {
      d: boolean;
      e: {
        f: number;
      };
    };
  };
}

type LazyPerson = Getters<Person>;

const tempValue: LazyPerson = {
  getAge: 10,
  getLocation: 'ok',
  getName: 'name',
  getTest: {
    getA: 'string',
    getB: {
      getD: true,
      getE: {
        getF: 1,
      },
    },
  },
};
