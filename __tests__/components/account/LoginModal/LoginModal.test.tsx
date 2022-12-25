import React from 'react';
import LoginModal from '~src/components/account/LoginModal/';
import {fireEvent, render} from '~__test_helpers__/testUtils';
describe('FormInput', () => {
  it('pressing login button opens modal', async () => {
    const {getByText, findByLabelText} = await render(<LoginModal />);
    const loginLink = getByText('LOGIN');
    expect(loginLink).toBeDefined();

    fireEvent.press(loginLink);

    const emailInput = await findByLabelText('input for email');
    expect(emailInput).toBeDefined();

    const passwordInput = await findByLabelText('input for password');
    expect(passwordInput).toBeDefined();
  });
});
