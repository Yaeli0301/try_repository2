import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignUp() {
  // השתמש ב- useForm לקבל את כל הפונקציות והנתונים מה-hook
  const { register, handleSubmit, formState: { errors } } = useForm();

  // פונקציה שתתבצע כאשר המשתמש שולח את הטופס
  const onSubmit = (data) => {
    console.log(data); // הדפסת הנתונים של הטופס
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* שדה טקסט עם אימות */}
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })} // הגדרת אימות
        />
        {errors.name && <p>{errors.name.message}</p>} {/* הצגת שגיאה אם יש */}
      </div>

      {/* שדה אימייל עם אימות */}
      <div>
        <label htmlFor="tz">id:</label>
        <input
          id="tz"
          type="text"
          {...register('tz', { required: 'tz is required' })}
        />
        {errors.tz && <p>{errors.tz.message}</p>} {/* הצגת שגיאה אם יש */}
      </div>
      <div>
        <label htmlFor="password">password:</label>
        <input
          id="paassword"
          type="password"
          {...register('password', { required: 'password is required' })}
        />
        {errors.password&& <p>{errors.password.message}</p>} {/* הצגת שגיאה אם יש */}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

