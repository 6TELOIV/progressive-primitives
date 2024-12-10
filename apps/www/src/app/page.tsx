import * as NavigationMenu from "components/navigation-menu/NavigationMenu";

export default function Page() {
  return (
    <>
      <NavigationMenu.Root name="root-nav">
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul>
                <li>
                  <a href="/products/1">Product 1</a>
                </li>
                <li>
                  <a href="/products/2">Product 2</a>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Solutions</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul>
                <li>
                  <a href="/solutions/1">Solution 1</a>
                </li>
                <li>
                  <a href="/solutions/2">Solution 2</a>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Resources</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul>
                <li>
                  <a href="/resources/1">Resource 1</a>
                </li>
                <li>
                  <a href="/resources/2">Resource 2</a>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <main>
        <h1>Hello, Next.js!</h1>
      </main>
    </>
  );
}
