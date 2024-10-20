function heapSort(a) {
  let n = a.length;
  buildMaxHeap(a, n);
  for (let i = n - 1; i >= 0; i--) {
      swap(a, 0, i);
      n = n - 1;
      heapify(a, n, 0);
  }
}

function buildMaxHeap(a, n) {
  for (let i = Math.floor(n / 2); i >= 0; i--) {
      heapify(a, n, i);
  }
}

function heapify(a, n, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;

  if (left < n && a[left] > a[max]) {
      max = left;
  }

  if (right < n && a[right] > a[max]) {
      max = right;
  }

  if (max !== i) {
      swap(a, i, max);
      heapify(a, n, max);
  }
}

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}