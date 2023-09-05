import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

// yarn run unit Sidebar.test.tsx

describe('Sidebar Widget', () => {
  test('toBeInTheDocument', () => {
    // const SidebarWithTranslation = withTranslation()(Sidebar);
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar collapsed', () => {
    // const SidebarWithTranslation = withTranslation()(Sidebar);
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
