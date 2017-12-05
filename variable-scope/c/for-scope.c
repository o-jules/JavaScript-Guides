#include <stdio.h>

int main() {
	int i = 2;
	
	for (int i = 0, j = 0; i < 5; i++) {
		printf("%d", i); // 0 1 2 3 4
	}

	printf("%d", i); // 2
}
