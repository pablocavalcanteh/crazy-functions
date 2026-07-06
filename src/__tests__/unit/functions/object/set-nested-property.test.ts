import { setNestedProperty } from '@/functions';

describe('setNestedProperty', () => {
  it('should set property in empty object', () => {
    expect(setNestedProperty({}, 'a', 42)).toEqual({ a: 42 });
  });

  it('should create intermediate objects', () => {
    const obj = {};

    expect(setNestedProperty(obj, 'a.b.c', 42)).toEqual({
      a: {
        b: {
          c: 42,
        },
      },
    });
  });

  it('should overwrite existing value', () => {
    const obj = {
      a: {
        b: {
          c: 1,
        },
      },
    };

    expect(setNestedProperty(obj, 'a.b.c', 42)).toEqual({
      a: {
        b: {
          c: 42,
        },
      },
    });
  });

  it('should preserve existing properties', () => {
    const obj = {
      a: {
        x: 1,
      },
      keep: true,
    };

    expect(setNestedProperty(obj, 'a.b.c', 42)).toEqual({
      a: {
        x: 1,
        b: {
          c: 42,
        },
      },
      keep: true,
    });
  });

  it('should handle deep nesting', () => {
    const obj = {
      top: 'value',
    };

    expect(setNestedProperty(obj, 'a.b.c.d.e', 'deep')).toEqual({
      top: 'value',
      a: {
        b: {
          c: {
            d: {
              e: 'deep',
            },
          },
        },
      },
    });
  });
});
