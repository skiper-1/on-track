<script setup>
import { CheckCircleIcon } from '@heroicons/vue/16/solid';
import { BoltIcon } from '@heroicons/vue/24/outline';
import { ClockIcon } from '@heroicons/vue/24/outline';
import { ChartBarIcon } from '@heroicons/vue/24/outline';
import { ListBulletIcon } from '@heroicons/vue/16/solid';
import { ref } from 'vue';

const activeView = ref('Timeline');
</script>

<template>
  <header
    class="sticky top-0 bg-gray-800 text-white flex items-center justify-between p-5"
  >
    <a href="#" class="flex items-center gap-1">
      <BoltIcon
        class="text-green-500 h-15 bg-gradient-to-tr from-blue-600 to-violet-900 rounded-2xl border-2 border-green-500 p-2"
      />
      <span
        class="bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-blue-400 font-bold text-2xl"
      >
        On Track
      </span>
    </a>
    <a href="#">
      <div v-if="true" class="flex gap-2">
        <div>Day complete!</div>
        <CheckCircleIcon class="size-6 text-lime-500" />
      </div>
      <div v-else class="flex gap-2">
        <div>Progress: <span>20%</span></div>
        <div class="h-5 w-5 bg-red-500 rounded-full"></div>
      </div>
    </a>
  </header>
  <main
    class="bg-gray-800 text-center grow-1 text-white flex items-center justify-center"
  >
    {{ activeView }}
  </main>
  <nav class="sticky bottom-0 bg-gray-700 text-white">
    <ul class="flex items-center justify-around">
      <li>
        <a
          class="flex gap-2 flex-col justify-center items-center grow-1 py-3"
          href="#"
          @click="activeView = 'Timeline'"
        >
          <ClockIcon
            :class="[
              `h-15 text-gray-700 rounded-2xl from-green-500  ${
                activeView === 'Timeline'
                  ? 'to-blue-500 bg-gradient-to-tr border-2 border-white'
                  : 'bg-gradient-to-bl to-violet-500'
              }`,
            ]"
          />
          <div
            :class="[
              'text-2xl text-gray-400',
              { 'text-white': activeView === 'Timeline' },
            ]"
          >
            Timeline
          </div>
        </a>
      </li>
      <li>
        <a
          class="flex gap-2 flex-col justify-center items-center grow-1"
          href="#"
          @click="activeView = 'Activities'"
        >
          <ListBulletIcon
            :class="[
              `h-15 text-gray-700 rounded-2xl  from-green-500 ${
                activeView === 'Activities'
                  ? 'to-blue-500 bg-gradient-to-tr border-2 border-white'
                  : 'bg-gradient-to-bl to-violet-500'
              }`,
            ]"
          />
          <div
            :class="[
              'text-2xl text-gray-400',
              {
                'text-white': activeView === 'Activities',
              },
            ]"
          >
            Activities
          </div>
        </a>
      </li>
      <li>
        <a
          class="flex gap-2 flex-col justify-center items-center grow-1"
          href="#"
          @click="activeView = 'Progress'"
        >
          <ChartBarIcon
            :class="[
              `h-15 text-gray-700 rounded-2xl from-green-500 ${
                activeView === 'Progress'
                  ? 'to-blue-500 bg-gradient-to-tr border-2 border-white'
                  : 'bg-gradient-to-bl to-violet-500'
              }`,
              ,
            ]"
          />
          <div
            :class="[
              'text-2xl text-gray-400',
              { 'text-white': activeView === 'Progress' },
            ]"
          >
            Progress
          </div>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
